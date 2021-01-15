export const Thing = (props: { id?: string }) => {
  return <div css={{ color: 'red' }}>ui - {props.id}!</div>;
};
