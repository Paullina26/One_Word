import React from 'react';
import { act } from 'react';
import { render as rtlRender, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LearningSettings from './LearningSettings';
import fetchWithToken from 'API/api';
import { toast } from 'react-toastify';

// Mocking fetchWithToken and toast
jest.mock('API/api');
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
  },
}));

// Custom render function that wraps in act
async function render(ui: React.ReactElement) {
  await act(async () => {
    rtlRender(ui);
  });
}

describe('LearningSettings', () => {
  beforeEach(() => {
    // Mock the fetchWithToken function to return dummy data
    (fetchWithToken as jest.Mock).mockResolvedValue({
      status: 200,
      response: {
        notifications: [
          { time: '08:00', type: '1' },
          { time: '12:00', type: '2' },
        ],
        summaryDay: '6',
        breakDay: '7',
      },
    });
  });

  test('renders LearningSettings with correct titles', async () => {
    await render(<LearningSettings />);
    expect(screen.getByText('Learning Settings')).toBeInTheDocument();
    expect(screen.getByText('Notifications Time')).toBeInTheDocument();
    expect(screen.getByLabelText('On which days do you want to review?')).toBeInTheDocument();
    expect(screen.getByLabelText('On which days do you want to take a break?')).toBeInTheDocument();
  });

  test('fetches user settings on mount', async () => {
    await render(<LearningSettings />);
    await waitFor(() => {
      expect(fetchWithToken).toHaveBeenCalledWith({ endpoint: 'getUserSettings', method: 'GET' });
    });
  });

  test('displays fetched user settings', async () => {
    await render(<LearningSettings />);
    await waitFor(() => {
      expect(screen.getByDisplayValue('8:00 AM')).toBeInTheDocument();
      expect(screen.getByDisplayValue('12:00 PM')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Saturday')).toBeInTheDocument();
    });
  });

  test('adds and removes notifications', async () => {
    await render(<LearningSettings />);
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: /add/i }));
      expect(screen.getAllByRole('button', { name: /xmark/i })).toHaveLength(3); // Initially 2, after adding 1 more
      fireEvent.click(screen.getAllByRole('button', { name: /xmark/i })[0]);
      expect(screen.getAllByRole('button', { name: /xmark/i })).toHaveLength(2);
    });
  });

  test('submits the form with correct data', async () => {
    await render(<LearningSettings />);
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Save' }));
      expect(fetchWithToken).toHaveBeenCalledWith({
        endpoint: 'updateUserSettings',
        method: 'PUT',
        body: {
          notifications: [
            { time: '08:00', type: '1' },
            { time: '12:00', type: '2' },
          ],
          summaryDay: '6',
          breakDay: '7',
        },
      });
    });
  });

  test('displays an error toast when fetch fails', async () => {
    (fetchWithToken as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    await render(<LearningSettings />);
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Failed to fetch user settings');
    });
  });
});
