function ProfileCard(props) {
  const title = props.title;
  const handle = props.handle;
  const imageSrc = props.imageSrc;
  return (
    <>
      <img src={imageSrc} alt="pda logo" />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </>
  );
}

export default ProfileCard;
