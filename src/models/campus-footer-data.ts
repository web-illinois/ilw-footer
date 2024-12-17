export interface CampusLink {
    label: string;
    href: string;
}

export interface CampusFooterSection {
    label: string;
    links: CampusLink[];
}

export interface CampusFooterData {
    illinois: {
        sections: CampusFooterSection[];
    }
}