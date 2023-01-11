import roseFloatEntries from "../pages/rose-history-content";

const HistoryTableBody = () => {
    return(
    <>
    {roseFloatEntries.map( tableRow => (
        <tr>
            <td>{tableRow.year}</td>
            <td>{tableRow.parade ? tableRow.parade : '-'}</td>
            <td>{tableRow.float ? tableRow.float : '-'}</td>
            <td>{tableRow.award ? tableRow.award : '-'}</td>
            <td>{tableRow.president ? tableRow.president : '-'}</td>
        </tr>
    ))}
    </>
    );

}

export default HistoryTableBody;