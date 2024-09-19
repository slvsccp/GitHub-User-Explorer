import { RepoProps } from "../types/repo"

import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"

import classes from './Repo.module.css'

export function Repo({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count
}: RepoProps) {
  return (
    <div className={classes.repo}>
      <div>{name}</div>
      <p className={classes.language}>
        <BsCodeSlash />
        <span>{language}</span>
      </p>
      <div className={classes.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
        <a href={html_url} target="_blank" className={classes.repo_btn}>
          <span>Ver repositório</span>
          <RiGitRepositoryLine />
        </a>
      </div>
    </div>
  )
}