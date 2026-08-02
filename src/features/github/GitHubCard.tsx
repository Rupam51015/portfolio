type Props={

github:any

}

export default function GitHubCard({github}:Props){

return(

<div className="github-card glass">

<h2>

{github.username}

</h2>

<p>

Public Repositories

</p>

<h1>

{github.repos}+

</h1>

<a

href={github.profile}

target="_blank"

rel="noreferrer"

className="btn btn-primary"

>

View GitHub

</a>

</div>

)

}