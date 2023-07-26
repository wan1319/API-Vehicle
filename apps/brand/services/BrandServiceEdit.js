const BrandServiceEdit = async (brandID, brandName, createdBy, updatedBy) => {
  const updatedAt = new Date().toISOString();

  const data = {
      brandName,
      createdBy,
      updatedAt,
      updatedBy,
  };

  await BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE)
      .where({ brandID })
      .update(data);

  return { brandID, ...data };
};
