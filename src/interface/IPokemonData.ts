export default interface IPokemonData {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    types: string[];
    image: string;
    location: {
        locations: string;
        versions: string[];
    }[];
    Games: string[];
    captured: boolean;
}