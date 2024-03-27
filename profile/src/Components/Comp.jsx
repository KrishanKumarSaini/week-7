export default function Comp() {
  return (
    <div className="profile-card">
      <div className="img-card">
        <img className="img" src="public/krishan_photo.jpeg" alt="profile" />
      </div>
      <div className="name-card">
        <h3 className="name">Krishan Kumar Saini</h3>
        <span className="age">25</span>
      </div>
      <span className="loc">London</span>
      <div className="info">
        <div className="followers">
          <h3>80K</h3>
          <p>Followers</p>
        </div>
        <div className="likes">
          <h3>803K</h3>
          <p>Likes</p>
        </div>
        <div className="photos">
          <h3>1.4K</h3>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
}
