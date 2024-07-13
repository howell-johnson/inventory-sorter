import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type HomeData = {
  beds: string;
  baths: string;
  factory: string;
  singleDouble: string;
  house: string;
  sqft: string;
  optionalBed: string;
  inStock: string;
  possibleBeds: string;
  link: string;
};

type OutputProps = {
  data: HomeData[];
};

export function Output({ data }: OutputProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Factory</TableHead>
          <TableHead>Units</TableHead>
          <TableHead>House</TableHead>
          <TableHead>Sqft</TableHead>
          <TableHead>Optional Bed</TableHead>
          <TableHead>In Stock</TableHead>
          <TableHead>Possible Beds</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((home, index) => (
          <TableRow key={index}>
            <TableCell>{home.factory}</TableCell>
            <TableCell>{home.singleDouble}</TableCell>
            <TableCell>{home.house}</TableCell>
            <TableCell>{home.sqft}</TableCell>
            <TableCell>{home.optionalBed}</TableCell>
            <TableCell>{home.inStock}</TableCell>
            <TableCell>{home.possibleBeds}</TableCell>
            <TableCell>
              <a
                href={home.link}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                View
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
