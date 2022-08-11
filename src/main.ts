import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(): Promise<void> {
  try {
    const repo = github.context.payload.repository!.name;
    const owner = github.context.payload.repository!.owner.login;

    const octokit = github.getOctokit(core.getInput('access_token'));

    const { data } = await octokit.rest.repos.listBranches({
      repo,
      owner
    })

    console.log(JSON.stringify(data));

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
