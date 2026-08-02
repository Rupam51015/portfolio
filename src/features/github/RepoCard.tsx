type Props={

repo:any

}

export default function RepoCard({repo}:Props){

return(

<div className="repo-card glass">

<h3>

{repo.title}

</h3>

<p>

{repo.description}

</p>

<a

href={repo.github}

target="_blank"

rel="noreferrer"

>

View Repository →

</a>

</div>

)

}