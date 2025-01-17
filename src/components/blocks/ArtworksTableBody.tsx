import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArtworkItem, Transformation } from "@/types";
import { statusColors, statusMap, transformationsMap } from "@/constants";
import NotificationDot from "../ui/NotificationDot";
import { Eye, EyeClosed, File } from "lucide-react";
import { PathEnum } from "@/enums";
import { redirect } from "next/navigation";

const ArtworksTableBody = ({ data }: { data: ArtworkItem[] }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const getImageTransformation = (transformations: Transformation[]) => {
    const transformation = Object.values(transformationsMap).find(
      ({ maxWidth }) => screenWidth <= maxWidth
    );
    const presetKey = transformation ? transformation.presetKey : "";

    return transformations.find((t) => t.preset_key === presetKey);
  };

  const cellStyles = "py-5 px-4 truncate text-nowrap";

  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <tbody>
      {data.map(
        ({
          main_photo,
          id,
          artist_name,
          artwork_name,
          price,
          documents_number,
          has_notifications,
          views,
          isVisible,
          creation_year,
          date_updated,
          status,
        }) => {
          const transformation = getImageTransformation(
            main_photo.transformations
          );

          return (
            <tr
              className="bg-gray-300 hover:bg-gray-200 shadow-sm hover:lg transition-colors duration-300 rounded-2xl text-black font-semibold cursor-pointer"
              key={id}
              onClick={() => redirect(`${PathEnum.Artworks}/${id}`)}
            >
              <td
                className={`${cellStyles} pl-5 rounded-tl-xl rounded-bl-xl mt-5`}
              >
                <Image
                  className="min-w-12 min-h-12 rounded-md max-h-20 max-w-20 aspect-square object-cover"
                  src={`/${transformation ? transformation.filename_disk : ""}`}
                  alt={artwork_name}
                  width={transformation ? transformation.width : 48}
                  height={transformation ? transformation.height : 48}
                />
              </td>
              <td className={cellStyles}>
                {artwork_name ?? "Untitled"}
                {has_notifications && <NotificationDot />}
              </td>
              <td className={cellStyles}>{artist_name}</td>
              <td className={cellStyles}>{views.toLocaleString("en-US")}</td>
              <td className={cellStyles}>{creation_year}</td>
              <td className={cellStyles}>
                <div
                  className={`rounded-2xl w-fit p-2 text-${
                    status && statusColors[status as keyof typeof statusColors]
                  }-700 bg-${
                    status && statusColors[status as keyof typeof statusColors]
                  }-400/40`}
                >
                  {statusMap[status as keyof typeof statusMap]}
                </div>
              </td>
              <td className={cellStyles}>
                {isVisible ? (
                  <div className="bg-green-400/40 text-green-700 p-2 rounded-md w-fit">
                    <Eye className="inline-block mr-1" /> Visible
                  </div>
                ) : (
                  <div className="bg-gray-500/40 text-gray-800 p-2 rounded-md w-fit">
                    <EyeClosed className="inline-block mr-1" /> Hidden
                  </div>
                )}
              </td>
              <td className={cellStyles}>$ {price.toLocaleString("en-US")}</td>
              <td className={cellStyles}>
                {documents_number ? (
                  <div className="bg-blue-400/40 text-blue-700 p-2 rounded-md w-fit">
                    <File className="inline-block mr-1" /> {documents_number}
                  </div>
                ) : (
                  <div className="bg-gray-400/40 text-gray-700 p-2 rounded-md w-fit">
                    No Docs
                  </div>
                )}
              </td>
              <td className={`${cellStyles} rounded-tr-xl rounded-br-xl`}>
                {date_updated || "N/A"}
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default ArtworksTableBody;
