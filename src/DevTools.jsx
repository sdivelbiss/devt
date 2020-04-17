import React, { useState, useEffect } from 'react';
import featureToggles, { enable, disable } from './feature-toggles';

const Feature = ({f}) => {
  const [feature, setFeature] = useState(featureToggles[f]);
      
  useEffect(() => {
    if (feature) {
      enable(f);
    } else {
      disable(f);
    }
  }, [feature]);

  return (
    <div className={`devt-feature devt-feature-${f}`}>
      <label>
        {f}:{' '}
        <input type="checkbox" className={'devt-toggle'} checked={feature} onChange={e => setFeature(e.target.checked)} />
      </label>
    </div>
  )
}

const DevTools = ({features}) => {
    return (
      <div id="devt-dev-tools">
        <header id={'devt-header'}>
          <div>
            <span className={'devt-header-title'}>
              Local Dev
            </span> 
            🛠
          </div>
          <div className={'devt-refresh'} onClick={() => window.location.reload()}>
            🔄
          </div>
        </header>
        <div className="devt-tools">
          {features.map(f => (
            <Feature key={f} f={f}/>
          ))}
        </div>
      </div>
    );
}

export default DevTools;
export { DevTools }



