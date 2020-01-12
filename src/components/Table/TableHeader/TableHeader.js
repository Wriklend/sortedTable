import React from 'react';

export default ({ headers }) => {
    return (
      <thead>
        <tr>
          {headers.map((item, index) =>
            <th key={index}>{item}</th>
          )}
        </tr>
      </thead>
    );
}
