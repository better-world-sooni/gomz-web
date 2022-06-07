import { wording } from "src/wording/wording";
import { IMAGES } from "./images";

export const team = (locale) => [
    {
        name: wording.team.index.members.jieun.name[locale],
        imageUri: IMAGES.team.jieun,
        position: wording.team.index.members.jieun.position[locale],
        desc: wording.team.index.members.jieun.desc[locale],
        specialty: wording.team.index.members.jieun.specialty[locale],
        countries: wording.team.index.members.jieun.countries,
    },
    {
        name: wording.team.index.members.minjun.name[locale],
        imageUri: IMAGES.team.mj,
        position: wording.team.index.members.minjun.position[locale],
        desc: wording.team.index.members.minjun.desc[locale],
        specialty: wording.team.index.members.minjun.specialty[locale],
        countries: wording.team.index.members.minjun.countries,
    },
    {
        name: wording.team.index.members.yeajean.name[locale],
        imageUri: IMAGES.team.serena,
        position: wording.team.index.members.yeajean.position[locale],
        desc: wording.team.index.members.yeajean.desc[locale],
        specialty: wording.team.index.members.yeajean.specialty[locale],
        countries: wording.team.index.members.yeajean.countries,
    },
    {
        name: wording.team.index.members.eric.name[locale],
        imageUri: IMAGES.team.eric,
        position: wording.team.index.members.eric.position[locale],
        desc: wording.team.index.members.eric.desc[locale],
        specialty: wording.team.index.members.eric.specialty[locale],
        countries: wording.team.index.members.eric.countries,
    },
];