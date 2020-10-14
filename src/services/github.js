export const getRepoData = ({owner, repo}) => {
  return fetch(`https://api.github.com/repos/${owner}/${repo}`)
  .then(response => response.json())
}
