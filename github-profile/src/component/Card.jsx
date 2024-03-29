export default function Card({ profile }) {
  return (
    <div style={{ width: "400px", height: "500px", border: "2px solid black" }}>
      <div
        className="coverPic"
        style={{ width: "400px", height: "150px", background: "#7df0f0" }}
      >
        <a
          href={profile.html_url}
          target="_blank"
          style={{ position: "relative", left: "150px" }}
        >
          Visit Profile
        </a>
      </div>

      <img
        style={{
          width: "150px",
          height: "150px",
          top: "-90px",
          borderRadius: "50%",
          position: "relative",
        }}
        src={profile.avatar_url}
        alt=""
      />

      <div
        className="content"
        style={{
          width: "400px",
          height: "350px",
          position: "relative",
          top: "-85px",
        }}
      >
        <div>
          <h2>{profile.name}</h2>
          <p style={{ marginTop: "-20px" }}>({profile.login})</p>
          <p style={{ marginTop: "-15px" }}>{profile.location}</p>
          <div
            style={{
              display: "flex",
              padding: "20px",
              borderTop: "1px solid grey",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2>{profile.followers}</h2>
              <p>Followers</p>
            </div>
            <div>
              <h2>{profile.following}</h2>
              <p>Following</p>
            </div>
            <div>
              <h2>{profile.public_repos}</h2>
              <p>Public Repos</p>
            </div>
            <div>
              <h2>{profile.public_gists}</h2>
              <p>Public Gists</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "space-evenly",
            }}
          >
            <a
              href={
                profile.twitter_username
                  ? `https://twitter.com/${profile.twitter_username}`
                  : ""
              }
              target="_blank"
            >
              Twitter
            </a>
            <a href={profile.blog ? profile.blog : ""} target="_blank">
              Blog
            </a>
            <a href={profile.html_url} target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
