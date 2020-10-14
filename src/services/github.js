export function fetchRepos(repos) {
  const promises = repos.map(getRepoData)
  return Promise.all(promises)
}

export const getRepoData = ({owner, repo}) => {
  return fetch(`https://api.github.com/repos/${owner}/${repo}`)
  .then(response => response.json())
}

export const fetchCommitCount = ({owner, repo}) => {
    const COUNT_REGEX = /(?<count>\d+)[^,.\d\n]+?(?=rel="last")/;
    return fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      .then(response => {
        if (response.ok) {
          return response.headers
            .get('Link')
            .match(COUNT_REGEX)
            .groups
            .count
        } else {
          throw new Error(response.status);
        }
      })
  }

export const fetchCount = ({owner, repo, thing}) => {
    const COUNT_REGEX = /(?<count>\d+)[^,.\d\n]+?(?=rel="last")/;
    return fetch(`https://api.github.com/repos/${owner}/${repo}/${thing}?per_page=1`)
      .then(response => {
        if (response.ok) {
          return response.headers
            .get('Link')
            .match(COUNT_REGEX)
            .groups
            .count
        } else {
          throw new Error(response.status);
        }
      })
  }

