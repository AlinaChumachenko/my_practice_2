export const Modal = ({ hendleClouse }) => {
  return (
    <div>
      <p>Are you shure?</p>
      <ul>
        <li>
          <button>Yes</button>
        </li>
        <li>
          <button onClick={hendleClouse}>No</button>
        </li>
      </ul>
    </div>
  );
};
