import React from "react";

function Search({ setPost, setInfo, info, postData, post }) {
    function handleTextChange(event) {
        let input = event.target.value.toLowerCase();

        setPost(
            postData.filter((item) =>
                item.location.toLowerCase().includes(input)
            )
        );
        setInfo(input);
    }
    return (
        <>
            <div className="fs-3 script-font text-center p-4 bg-light-subtle border border-light-subtle border-start-0 border-end-0">
                Travel is the only thing you can buy that makes you richer...
            </div>
            <form className="container d-flex gap-3 mt-4 align-items-center mb-4">
                <label className="fs-6">Search post by location...</label>
                <input
                    className="form-control w-75"
                    type="text"
                    name="location"
                    value={info}
                    onChange={handleTextChange}
                />
                <button
                    className="btn btn-warning"
                    onClick={(e) => {
                        e.preventDefault();
                        setPost(postData);
                        setInfo("");
                    }}
                >
                    Cancel
                </button>
            </form>
        </>
    );
}

export default Search;
