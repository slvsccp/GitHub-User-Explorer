import { RepoProps } from "../types/repo"

import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"

export function Repo({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count
}: RepoProps) {
  return (
    <div>
      <div>{name}</div>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
        <a href={html_url} target="_blank">
          <span>Ver código</span>
          <RiGitRepositoryLine />
        </a>
      </div>
    </div>
  )
}