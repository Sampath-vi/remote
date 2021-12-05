import React from 'react';
import healthStore from './store';
import { action, observable, makeObservable, runInAction } from 'mobx';
import { observer } from 'mobx-react';

export default observer(() => {
  React.useEffect(() => {
    healthStore.fetchHealth();
  }, []);

  return (
    <div>
      <div>
        Config Backend Health:
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <span style={{ marginRight: '60px' }} />
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(healthStore.health).map(item => (
              <tr key={item}>
                <td>{item}</td>
                <span style={{ marginRight: '60px' }} />
                <td>{healthStore.health[item]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});