import Property from "./Property";
export default function Featured() {
   

    return (
        <div className="featured">
            <h1>Featured</h1>
            <div>
                <Property />
                <Property />
                <Property />
            </div>
            {/* <Property /> */}
        </div>
    );
}