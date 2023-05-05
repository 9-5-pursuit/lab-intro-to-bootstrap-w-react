export default function Table({ postData }) {

    function showCount(postData, args) {
        return postData.reduce((acc, cur) => {
            if (cur.location === args) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
    }

    return (

        <>
            <h3 className="display-5">Posts by <span className="text-warning">location</span></h3>
            <table className="table table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th>Cities</th>
                        <th>Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postData.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.location}</td>
                                    <td><span className="badge text-bg-secondary">{showCount(postData, item.location)}</span></td>
                                </tr> 
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}