import { TableClient, Typography, TypographySize } from 'ui-react'
import { createColumnHelper } from '@tanstack/react-table'

interface Transaction {
  id: number // Unique identifier for the transaction
  date: string // Date of the transaction
  amount: number // Amount of the transaction
  type: 'credit' | 'debit' // Type of transaction (credit or debit)
  description: string // Description or details of the transaction
  accountId: number // Identifier for the account related to the transaction
  category: string // Category of the transaction (e.g., groceries, utilities)
  status: 'pending' | 'completed' | 'failed' // Status of the transaction
}

const columnHelper = createColumnHelper<Transaction>()

const columns = [
  columnHelper.accessor('id', {
    header: 'Id'
  }),
  columnHelper.accessor('accountId', {
    header: 'Account Id',
    enableSorting: false
  }),
  columnHelper.accessor('amount', {
    header: 'Amount'
  }),
  columnHelper.accessor('type', {
    header: 'Type'
  }),

  columnHelper.accessor('category', {
    header: 'Category'
  }),
  columnHelper.accessor('date', {
    header: 'Date'
  }),
  columnHelper.accessor('description', {
    header: 'Description'
  }),
  columnHelper.accessor('status', {
    header: 'Status'
  })
]
const transactions: Transaction[] = [
  {
    id: 1,
    date: '2024-01-01',
    amount: 100.0,
    type: 'credit',
    description: 'Salary',
    accountId: 101,
    category: 'Income',
    status: 'failed'
  },
  {
    id: 2,
    date: '2024-01-03',
    amount: 50.0,
    type: 'debit',
    description: 'Grocery shopping',
    accountId: 101,
    category: 'Groceries',
    status: 'pending'
  },
  {
    id: 3,
    date: '2024-01-05',
    amount: 200.0,
    type: 'credit',
    description: 'Freelance payment',
    accountId: 102,
    category: 'Income',
    status: 'completed'
  },
  {
    id: 4,
    date: '2024-01-07',
    amount: 75.0,
    type: 'debit',
    description: 'Restaurant',
    accountId: 101,
    category: 'Dining',
    status: 'completed'
  },
  {
    id: 5,
    date: '2024-01-09',
    amount: 30.0,
    type: 'debit',
    description: 'Movie tickets',
    accountId: 103,
    category: 'Entertainment',
    status: 'completed'
  },
  {
    id: 6,
    date: '2024-01-11',
    amount: 100.0,
    type: 'debit',
    description: 'Electricity bill',
    accountId: 101,
    category: 'Utilities',
    status: 'completed'
  },
  {
    id: 7,
    date: '2024-01-13',
    amount: 20.0,
    type: 'debit',
    description: 'Taxi fare',
    accountId: 102,
    category: 'Transport',
    status: 'completed'
  },
  {
    id: 8,
    date: '2024-01-15',
    amount: 300.0,
    type: 'credit',
    description: 'Stock dividend',
    accountId: 103,
    category: 'Income',
    status: 'completed'
  },
  {
    id: 9,
    date: '2024-01-17',
    amount: 45.0,
    type: 'debit',
    description: 'Gym membership',
    accountId: 101,
    category: 'Fitness',
    status: 'completed'
  },
  {
    id: 10,
    date: '2024-01-19',
    amount: 60.0,
    type: 'debit',
    description: 'Internet bill',
    accountId: 101,
    category: 'Utilities',
    status: 'completed'
  },
  {
    id: 11,
    date: '2024-01-21',
    amount: 150.0,
    type: 'debit',
    description: 'Online shopping',
    accountId: 102,
    category: 'Shopping',
    status: 'completed'
  },
  {
    id: 12,
    date: '2024-01-23',
    amount: 80.0,
    type: 'debit',
    description: 'Concert tickets',
    accountId: 103,
    category: 'Entertainment',
    status: 'completed'
  },
  {
    id: 13,
    date: '2024-01-25',
    amount: 200.0,
    type: 'credit',
    description: 'Cashback reward',
    accountId: 101,
    category: 'Income',
    status: 'completed'
  },
  {
    id: 14,
    date: '2024-01-27',
    amount: 50.0,
    type: 'debit',
    description: 'Grocery shopping',
    accountId: 101,
    category: 'Groceries',
    status: 'completed'
  },
  {
    id: 15,
    date: '2024-01-29',
    amount: 100.0,
    type: 'debit',
    description: 'Gas bill',
    accountId: 102,
    category: 'Utilities',
    status: 'completed'
  },
  {
    id: 16,
    date: '2024-01-31',
    amount: 75.0,
    type: 'debit',
    description: 'Dining out',
    accountId: 103,
    category: 'Dining',
    status: 'completed'
  },
  {
    id: 17,
    date: '2024-02-02',
    amount: 120.0,
    type: 'debit',
    description: 'New shoes',
    accountId: 101,
    category: 'Shopping',
    status: 'completed'
  },
  {
    id: 18,
    date: '2024-02-04',
    amount: 200.0,
    type: 'credit',
    description: 'Freelance project',
    accountId: 102,
    category: 'Income',
    status: 'completed'
  },
  {
    id: 19,
    date: '2024-02-06',
    amount: 90.0,
    type: 'debit',
    description: 'Utilities',
    accountId: 103,
    category: 'Utilities',
    status: 'completed'
  },
  {
    id: 20,
    date: '2024-02-08',
    amount: 40.0,
    type: 'debit',
    description: 'Lunch',
    accountId: 101,
    category: 'Dining',
    status: 'completed'
  },
  {
    id: 21,
    date: '2024-02-10',
    amount: 60.0,
    type: 'debit',
    description: 'Movie night',
    accountId: 102,
    category: 'Entertainment',
    status: 'completed'
  },
  {
    id: 22,
    date: '2024-02-12',
    amount: 150.0,
    type: 'credit',
    description: 'Gift',
    accountId: 103,
    category: 'Income',
    status: 'completed'
  },
  {
    id: 23,
    date: '2024-02-14',
    amount: 35.0,
    type: 'debit',
    description: 'Book purchase',
    accountId: 101,
    category: 'Shopping',
    status: 'completed'
  },
  {
    id: 24,
    date: '2024-02-16',
    amount: 110.0,
    type: 'debit',
    description: 'Utility bill',
    accountId: 102,
    category: 'Utilities',
    status: 'completed'
  },
  {
    id: 25,
    date: '2024-02-18',
    amount: 75.0,
    type: 'debit',
    description: 'Clothing',
    accountId: 103,
    category: 'Shopping',
    status: 'completed'
  },
  {
    id: 26,
    date: '2024-02-20',
    amount: 50.0,
    type: 'debit',
    description: 'Dinner',
    accountId: 101,
    category: 'Dining',
    status: 'completed'
  },
  {
    id: 27,
    date: '2024-02-22',
    amount: 85.0,
    type: 'debit',
    description: 'Transport pass',
    accountId: 102,
    category: 'Transport',
    status: 'completed'
  },
  {
    id: 28,
    date: '2024-02-24',
    amount: 300.0,
    type: 'credit',
    description: 'Bonus',
    accountId: 103,
    category: 'Income',
    status: 'completed'
  },
  {
    id: 29,
    date: '2024-02-26',
    amount: 45.0,
    type: 'debit',
    description: 'Coffee shop',
    accountId: 101,
    category: 'Dining',
    status: 'completed'
  },
  {
    id: 30,
    date: '2024-02-28',
    amount: 70.0,
    type: 'debit',
    description: 'Pet supplies',
    accountId: 102,
    category: 'Shopping',
    status: 'completed'
  }
]

const Page = () => {
  return (
    <div>
            <Typography className='mb-4' size={TypographySize.titleMedium}>Table</Typography>      

      <TableClient columns={columns} data={transactions} />
    </div>
  )
}
export default Page
