import { useState } from "react";

export function TwitterFollowCard({
  userName,
  name,
}) {

  const [isFollowing, setIfFollowing] = useState(false);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'ds-followCard-button is-following' : 'ds-followCard-button';

  const handleButtonClick = () => {
    setIfFollowing(!isFollowing);
  }

  return (
    <article className="ds-followCard">
      <header className="ds-followCard-header">
        <img
          className="ds-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de David-PX"
        />
        <div className="ds-followCard-header-info">
          <strong>{name}</strong>
          <span className="ds-followCard-header-username">
            @{userName}
          </span>
        </div>
      </header>

      <aside className="ds-followCard-actions">
        <button className={buttonClassName} onClick={handleButtonClick}>
            <span className="ds-followCard-text">{text}</span>
            <span className="ds-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
