import Feed from "react-instagram-authless-feed"

function Instagram() {
    return (
        <Feed userName="worksmidia" className="instagram-feed" classNameLoading="Loading" limit="8"/>
    )
}

export default Instagram