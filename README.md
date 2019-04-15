# Starter project for Tanam CMS
Fork this repository and update [`.firebaserc`](.firebaserc) with your own project ID.

After that, follow the instructions on setting up your Firebase project as described in
[the official Tanam documentation](https://github.com/oddbit/tanam#how-do-i-get-tanam).


# Build and deploy with CI/CD
Create a authentication token for non-interactive deployment with Firebase

```bash
$ firebase login:ci
```

You will be prompted to open a URL in the browser where you login using the account that has access
to your Firebase project.

After successfully loggin in, copy the auth token that is prompted in your terminal window. It should
look something like this

```
1/pZQgDFG9G89sdfjsdf0Fz_g9dfma7_zH0sdfi9snfY
```

## Travis
Create an [environment variable](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings)
in your project settings and enable the build pipeline to run on each update to the repository.
