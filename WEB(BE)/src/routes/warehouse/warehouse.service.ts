import {
  CreateWarehouseInput,
  UpdateWarehouseLayout,
} from './warehouse.schema';
import prisma from '../../plugins/prisma';

export async function createWarehouse(data: CreateWarehouseInput) {
  const warehouse = await prisma.warehouse.create({
    data: {
      storedUnitId: data.storedUnitId,
      name: data.name,
      comment: data.comment,
    },
  });

  return warehouse;
}

export async function updateWarehouseLayout(data: UpdateWarehouseLayout) {
  const { id, layout } = data;

  const warehouse = await prisma.warehouse.update({
    where: {
      id: id,
    },
    data: {
      layout: layout,
    },
  });

  return warehouse.layout;
}

export async function readWarehousesOnUnit(obj: any) {
  const storedUnitId = +obj.storedUnitId;
  const warehouses = await prisma.warehouse.findMany({
    where: {
      storedUnitId,
    },
    select: {
      name: true,
      id: true,
      comment: true,
      storedUnitId: true,
    },
  });
  return warehouses;
}
