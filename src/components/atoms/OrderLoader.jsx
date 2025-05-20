import { Skeleton } from "../ui/skeleton"
import { Table } from "./Table"





function OrderLoader({limit}) {
  return (
    <div className="flex flex-col gap-5">
      <Table.Body>
        {[...Array(limit)].map((_, i) => (
          <Table.Row key={`skeleton-${i}`}>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Row>
        <Table.Cell>
          <Skeleton className="h-4 w-20" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton className="h-4 w-20" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton className="h-4 w-20" />
        </Table.Cell>
      </Table.Row>

      <Table.Body>
        {[...Array(limit)].map((_, i) => (
          <Table.Row key={`skeleton-${i}`}>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </div>
  )
}
export default OrderLoader