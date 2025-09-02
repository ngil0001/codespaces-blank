export type Project = {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    links: { live?: string; repo?: string};
    cover: string;
}