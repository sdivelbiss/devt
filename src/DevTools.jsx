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
    <div className={`feature feature-${f}`}>
      <label>
        {f}:{' '}
        <input type="checkbox" className={'toggle'} checked={feature} onChange={e => setFeature(e.target.checked)} />
      </label>
    </div>
  )
}

const DevTools = ({features}) => {
    return (
      <div id="dev-tools">
        <header id={'header'}>
          <div>
            <span className={'header-title'}>
              Local Dev
            </span> 
            🛠
          </div>
          <div className={'refresh'} onClick={() => window.location.reload()}>
            🔄
          </div>
        </header>
        <div className="tools">
          {features.map(f => (
            <Feature key={f} f={f}/>
          ))}
        </div>
      </div>
    );
}

export default DevTools;
export { DevTools }



