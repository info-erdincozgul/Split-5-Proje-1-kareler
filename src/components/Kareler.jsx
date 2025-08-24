import React, { useState } from 'react';

const KareIdListesi = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Kareler() {
  const [kareId, setKareId] = React.useState('');
  const [state, setState] = React.useState(KareIdListesi);

  const classAdiAl = (id) => {
    return id === kareId ? 'active' : '';
  };

  const aktifEt = (id) => {
    id === kareId ? setKareId('') : setKareId(id);
  };

  return (
    <div className="widget-squares container">
      <h2>Kareler</h2>
      <div className="squares">
        {
          state.map((id) => (
            <div
              id={id}
              key={id}
              data-testid={id}
              className={`square ${classAdiAl(id)}`}
              onClick={() => aktifEt(id)}
            ></div>
          ))
        }
      </div>
    </div>
  );
}
