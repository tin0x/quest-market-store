type OrderErrorCode = 'ORDER_ITEM_EXISTS' | 'ORDER_ITEM_NOT_FOUND' | 'UNKNOWN_ERROR';

export type ApiError = {
  status: number | string;
  data: {
    code: OrderErrorCode;
    message: string;
  };
};

export type OrderById = OrderListOfGame;

export type GetOrderByIdArgs = {
  orderId: string;
};

export type OrderListOfGame = {
  id: string;
  userId: string;
  totalPrice: number;
  createdAt: string;
  orderItems: {
    gameId: number;
    title: string;
    price: number;
    poster: string;
  }[];
};

export type GetOrderListArgs = {
  userId: string;
};

export type OrderList = OrderListOfGame;

export type OrderListProps = {
  className?: string;
  orderItemsList: {
    gameId: number;
    title: string;
    price: number;
    poster: string;
  }[];
};

export type OrderDetailsItemProps = {
  orderId: string;
  totalPrice: number;
  date: string;
};

export type OrderDetailsListProps = {
  orderDetailsList: OrderListOfGame[];
};
