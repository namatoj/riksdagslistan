import { data } from './data.js';


export const getMembersOfParliament = () => {
    return data.personlista.person.filter(
        person => person.personuppdrag.uppdrag.filter(uppdrag => uppdrag.roll_kod === "Riksdagsledamot").length > 0
        )
}

export const getTerms = () => {
    let terms = [];
    const membersOfParliament = getMembersOfParliament(); 
    for (const member of membersOfParliament) {
        for (const uppdrag of member.personuppdrag.uppdrag) {
            if (uppdrag.roll_kod === "Riksdagsledamot" && uppdrag.ordningsnummer !== "0") {
                terms.push({
                    ordningsnummer: uppdrag.ordningsnummer, 
                    from: uppdrag.from.split(" ")[0],
                    to:uppdrag.tom.split(" ")[0],
                    party:member.parti, 
                    firstName:member.tilltalsnamn, 
                    lastName:member.efternamn,
                    photoUrl: member.bild_url_192 
                });
            }
        }
    }
    return terms

}

export const daysBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return Math.round((secondDate.getTime() - firstDate.getTime()) / (oneDay));
}