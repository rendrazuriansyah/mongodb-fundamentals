use('mongodbVSCodePlaygroundDB');

// STRUKTUR UMUM
// db.[koleksi_awal].aggregate([
//     {
//         $lookup: {
//         from: "[koleksi_yang_mau_dijoin]",
//         localField: "[field_di_koleksi_awal]",
//         foreignField: "[field_di_koleksi_tujuan]",
//         as: "[nama_field_hasil_join]"
//         }
//     }
// ]);

// LATIHAN 1 (one to one)
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: 'customers',
//       localField: 'customer_id',
//       foreignField: '_id',
//       as: 'customer_info',
//     },
//   },
// ]);

// LATIHAN 2 (one to many)
// db.products.aggregate([
//   {
//     $lookup: {
//       from: 'reviews',
//       localField: '_id',
//       foreignField: 'product_id',
//       as: 'reviews',
//     },
//   },
// ]);

// LATIHAN 3 (nested+flatten)/(unwind+project)
// db.classes.aggregate([
//   {
//     $lookup: {
//       from: 'tutors',
//       localField: 'tutor_id',
//       foreignField: '_id',
//       as: 'tutor_info',
//     },
//   },
//   {
//     $unwind: {
//       path: '$tutor_info',
//       includeArrayIndex: 'tutor_info_index',
//       preserveNullAndEmptyArrays: true,
//     },
//   },
//   {
//     $project: {
//       class_name: '$name',
//       tutor_name: '$tutor_info.name',
//       tutor_email: '$tutor_info.email',
//     },
//   },
// ]);
