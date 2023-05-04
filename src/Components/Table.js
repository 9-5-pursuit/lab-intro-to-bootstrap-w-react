export default function Table() {
    // <!-- ************************** -->
    // <!-- Best Sellers table -->
    // <!-- set class display-5 on h3 -->
    // <!-- Set classes table table-striped table-hover text-center on table -->
    // <!-- ************************** -->
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
        <td>New York City</td>
        <td></td>
      </tr>
      <tr>
        <td>Los Angeles</td>
        <td></td>
      </tr>
      <tr>
        <td>Chicago</td>
        <td></td>
      </tr>
      <tr>
        <td>Houston</td>
        <td></td>
      </tr>
      <tr>
        <td>Miami</td>
        <td></td>
      </tr>
    </tbody>
        </table>
      </>
    );
  }