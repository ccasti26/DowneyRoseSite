import HistoryTableBody from "../components/HistoryTableBody";

const History = () => {
    return(
        <>
        
        <main>
            <table>
                <thead>
                    <tr>
                        <th colSpan='5'>Downey Rose Float History</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Year</th>
                        <th>Tournament Parade Theme</th>
                        <th>DRFA Float Theme</th>
                        <th>Awards Won</th>
                        <th>DRFA President</th>
                    </tr>
                    <HistoryTableBody />

                </tbody>
            </table>
        </main>

        </>

    );
}

export default History;