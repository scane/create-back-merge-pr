import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(): Promise<void> {
  try {
    core.debug(JSON.stringify(github.context));
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
