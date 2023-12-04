export const inputNameElement = (
  idName: string,
  nameElement: string,
  nameElementView: string
) => ({
  id: idName,
  type: nameElement,
  autoComplete: nameElement,
  label: nameElementView,
  placeholder: nameElementView,
});
