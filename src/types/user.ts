export type UserProps = {
    avatar_url: string,
    login: string,
    location: string,
    followers: number,
    following: number,
    bio: string ,
    public_repos: number,
    repos: {
        name: string
        html_url: string
        stargazers_count: number
        language: string
}[]
}
