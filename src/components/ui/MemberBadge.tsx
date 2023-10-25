import React, {MouseEventHandler} from 'react';
import {BadgeColorClass} from "@/utils/constant";
import {BadgeColor} from "@/utils/types";

export interface MemberBadgeProps {
    color: BadgeColor;
    text: string;
    id: string;
    onClickBadgeHandler: (id:string) => void;
    onClickRemoveBadgeHandler: (id:string) => void;
}

function MemberBadge({color, text, id, onClickBadgeHandler, onClickRemoveBadgeHandler}: MemberBadgeProps) {
    const badgeColor = BadgeColorClass[(color as string).toUpperCase()];

    function onClickRemoveHandler(e:MouseEvent){
        e.stopPropagation();
        onClickRemoveBadgeHandler(id);
    }

    return (
        <span
            className={`inline-flex items-center gap-x-0.5 rounded-md px-2 py-1 text-md font-medium ring-1 ring-inset ${badgeColor.badge}`}
            onClick={() => onClickBadgeHandler(id)}>
            {text}
            <button
                type="button"
                className={`group relative -mr-1 h-8 w-8 rounded-md ${badgeColor.button}`}
                onClick={onClickRemoveHandler as MouseEventHandler}
            >
                <span className="sr-only">Remove</span>
                <svg viewBox="0 0 14 14" className={`h-8 w-8 ${badgeColor.icon}`}>
                    <path d="M4 4l6 6m0-6l-6 6"/>
                </svg>
                <span className="absolute -inset-1"/>
            </button>
      </span>
    );
}

export default MemberBadge;