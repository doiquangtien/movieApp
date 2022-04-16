import ProfileUser from "../components/ProfileUser/ProfileUser";
import { userInputs } from "../formSource";

function Profile() {
  return (
    <>
      <ProfileUser inputs={userInputs} />
    </>
  );
}

export default Profile;
