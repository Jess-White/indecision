//straightforward:
//starred_count
//forks_count

//one-level deep:
//issues
//pulls
//commits

//two-level deep:
//events

//Basic repo data api calls, for stars through starred_count and forks through forks_count:
export function fetchRepos(repos) {
  const promises = repos.map(getRepoData)
  return Promise.all(promises)
}

export const getRepoData = ({owner, repo}) => {
  return fetch(`https://api.github.com/repos/${owner}/${repo}`)
  .then(response => response.json())
}

//Calls using pagination to grab commits, events, issues, and pulls:

export function fetchBatchCommits(repos) {
  const promises = repos.map(fetchCommitCount)
  return Promise.all(promises)
}

//Commit count:
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

export function fetchBatchIssues(repos) {
  const promises = repos.map(fetchIssueCount)
  return Promise.all(promises)
}

//Issue count:
export const fetchIssueCount = ({owner, repo}) => {
    const COUNT_REGEX = /(?<count>\d+)[^,.\d\n]+?(?=rel="last")/;
    return fetch(`https://api.github.com/repos/${owner}/${repo}/issues?per_page=1`)
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

export function fetchBatchPulls(repos) {
  const promises = repos.map(fetchPullCount)
  return Promise.all(promises)
}

//Pull count:
export const fetchPullCount = ({owner, repo}) => {
    const COUNT_REGEX = /(?<count>\d+)[^,.\d\n]+?(?=rel="last")/;
    return fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?per_page=1`)
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

//Event count:
export const fetchEventCount = ({owner, repo}) => {
    const COUNT_REGEX = /(?<count>\d+)[^,.\d\n]+?(?=rel="last")/;
    return fetch(`https://api.github.com/repos/${owner}/${repo}/events?per_page=1`)
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