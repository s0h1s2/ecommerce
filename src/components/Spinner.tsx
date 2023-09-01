import { LineWave } from "react-loader-spinner"
const Spinner = () => {
    return (
        <LineWave
            height="200"
            width="200"
            color="#4fa94d"
            ariaLabel="line-wave"
            wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            wrapperClass=""
            visible={true}
            firstLineColor="red"
            middleLineColor="green"
            lastLineColor="blue"
        />
    )
}

export default Spinner