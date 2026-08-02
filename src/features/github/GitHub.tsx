import { github } from "../../data/github";

import GitHubCard from "./GitHubCard";

import RepoCard from "./RepoCard";

export default function GitHub(){

return(

<section id="github" className="github-section">

<div className="container">

<div className="section-header">

<span className="section-tag">

GitHub

</span>

<h2 className="section-heading">

Open Source & Projects

</h2>

</div>

<GitHubCard github={github}/>

<div className="repo-grid">

{

github.featured.map(repo=>(

<RepoCard

key={repo.title}

repo={repo}

/>

))

}

</div>

</div>

</section>

)

}