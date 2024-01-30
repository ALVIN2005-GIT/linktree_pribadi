// IMPORT PHOTO PROFILE FORM ASSET
import Profile from "/profile.jpeg";

// RENDER IT FROM THIS FUNCTION
const profile = () => {
  return (
    <section className="text-center flex justify-center mb-7">
      <div className="px-3 mt-4">
        <div className=" flex mx-auto justify-center max-w-40 rounded-full mb-5 mt-3 lg:mt-0 border-4 border-x-neutral-800 overflow-hidden">
          <img className="w-full justify-center " src={Profile} alt="Alvin" />
        </div>
        <h1 className="text-3xl mb-4 font-bold text-white">
          ALVIN GRAND PUTRA
        </h1>
        <p className="text-xl text-white">Follow My Social Media</p>
      </div>
    </section>
  );
};

// EXPORT THE FILE COMPONENT
export default profile;
