import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CardItemBO, updateCart } from '../store/reducers/user-slice';
import { ProductBO } from '../types/product';
import { couponData, Products } from '../data/mock-data';
import {
  deliveryFee,
  deliveryFreeAmount,
  platformFee,
} from '../constants/appconstants';

export interface CartBO {
  id: number;
  optionId: number;
  count: number;
  item: ProductBO;
}

const useCart = () => {
  const cartItem = useSelector((state: RootState) => state.user.cart);
  const couponApplied = useSelector(
    (state: RootState) => state.user.isSelectedCoupon,
  );
  const dispatch = useDispatch();
  const [cart, setCart] = useState<CartBO[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [payableAmount, setPayableAmount] = useState<number>(0);

  useEffect(() => {
    const items = cartItem.map(ci => {
      const p = Products.find(pd => pd.id === ci.id);

      return {
        ...ci,
        item: p!,
      };
    });

    setCart(items);
  }, [cartItem]);

  useEffect(() => {
    let totalPrice = 0;

    const filter = cart.map(item => {
      const option = item.item.options.find(i => i.id === item.optionId);

      totalPrice += (option?.price ?? item.item.offerPrice) * item.count;
    });

    setTotal(totalPrice);

    if (couponApplied) {
      const filter = couponData.find(c => c.id === couponApplied);
      if (filter && filter.minAmount < totalPrice) {
        totalPrice -= filter.amount;
      }
    }

    if (deliveryFreeAmount < totalPrice) {
      totalPrice -= deliveryFee;
    } else {
      totalPrice += deliveryFee;
    }

    totalPrice += platformFee;

    setPayableAmount(totalPrice);
  }, [cart, couponApplied]);

  const addToCart = async (item: CardItemBO, isAdd: boolean) => {
    const findIsExist = [...cartItem].find(
      i => i.id === item.id && i.optionId == item.optionId,
    );

    if (findIsExist) {
      const updatedCartItems = cartItem.reduce<CardItemBO[]>((acc, i) => {
        if (i.id === item.id && i.optionId === item.optionId) {
          const count = isAdd ? i.count + 1 : i.count - 1;

          if (count > 0) {
            acc.push({ ...i, count });
          }
        } else {
          acc.push(i);
        }

        return acc;
      }, []);
      dispatch(updateCart(updatedCartItems));
    } else {
      dispatch(updateCart([...cartItem, item]));
    }
  };

  const removeFromCart = async (item: CardItemBO) => {
    const findIsExist = [...cartItem].filter(
      i => i.id === item.id && i.optionId !== item.optionId,
    );
    dispatch(updateCart(findIsExist));
  };

  return { cartItem, addToCart, removeFromCart, cart, total, payableAmount };
};

export default useCart;
