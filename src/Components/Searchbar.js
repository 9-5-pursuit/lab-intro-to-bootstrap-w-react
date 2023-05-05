export default function Searchbar({ value, handlePost, setPost, postData }) {
  return (
    <form>
      <label htmlFor="inputInfo" className="form-label m-2">
        Search posts by location...
      </label>
      <input
        value={value}
        type="text"
        className="d-inline w-50 m-2"
        id="inputInfo"
        onChange={(event) => handlePost(event)}
      />
      <button
        type="click"
        className="btn btn-warning m-3"
        onClick={() => setPost(postData)}
      >
        Cancel
      </button>
    </form>
  );
}

// function sayMessage(stuff) {
//   return "say " + stuff;
// }

// const words = "hi there!";
// sayMessage(words);

// console.log(`whenever I see my friends I want to ${sayMessage(words)}`)
