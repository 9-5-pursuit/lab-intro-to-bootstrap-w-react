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
            <h3 className="display-5">Best Sellers</h3>
            <table className="table table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th>Cities</th>
                        <th>Posts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Seattle</td>
                        <td>{showCount(postData, 'Seattle')}</td>
                    </tr>
                    <tr>
                        <td>Shibuya</td>
                        <td>{showCount(postData, 'Shibuya')}</td>
                    </tr>
                    <tr>
                        <td>Chicago</td>
                        <td>{showCount(postData, 'Chicago')}</td>
                    </tr>
                    <tr>
                        <td>San Francisco</td>
                        <td>{showCount(postData, 'San Francisco')}</td>
                    </tr>
                    <tr>
                        <td>San Diego</td>
                        <td>{showCount(postData, 'San Diego')}</td>
                    </tr>
                    <tr>
                        <td>Burano</td>
                        <td>{showCount(postData, 'Burano')}</td>
                    </tr>
                    <tr>
                        <td>Sevilla</td>
                        <td>{showCount(postData, 'Sevilla')}</td>
                    </tr>
                    <tr>
                        <td>Porto</td>
                        <td>{showCount(postData, 'Porto')}</td>
                    </tr>
                    <tr>
                        <td>London</td>
                        <td>{showCount(postData, 'London')}</td>
                    </tr>
                    <tr>
                        <td>Dubai</td>
                        <td>{showCount(postData, 'Dubai')}</td>
                    </tr>
                    <tr>
                        <td>Miami</td>
                        <td>{showCount(postData, 'Miami')}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}