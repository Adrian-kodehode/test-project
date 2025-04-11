interface TableProps {
  data: Array<{ title: string; artist: string; dateAdded: string }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left px-4 py-2">Titel</th>
          <th className="text-left px-4 py-2">Artist</th>
          <th className="text-left px-4 py-2">Date Added</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="bg-spotify-black hover:bg-spotify-darkgray transition-colors rounded-lg"
          >
            <td className="px-4 py-3 text-spotify-white rounded-sm">{item.title}</td>
            <td className="px-4 py-3 text-spotify-lightgray rounded-sm">{item.artist}</td>
            <td className="px-4 py-3 text-spotify-lightgray rounded-sm">
              {item.dateAdded}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
